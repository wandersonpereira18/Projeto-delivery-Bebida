/* =========================================================
   CONFIGURAÇÕES DO BOTECO DO RIBA
========================================================= */

const BAR = {
    lat: -15.813362128340948,
    lng: -48.0885345576712
};


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

const idade = document.getElementById("idade");
const entrar = document.getElementById("entrar");
const nome = document.getElementById("nome");
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const numero = document.getElementById("numero");
const bairro = document.getElementById("bairro");
const referencia = document.getElementById("referencia");
const distancia = document.getElementById("distancia");
const frete = document.getElementById("frete");
const camposObrigatorios = [nome, cep, endereco, numero, bairro, referencia];

/* =========================================================
   MAPA - LEAFLET
========================================================= */

const map = L.map("map").setView([BAR.lat, BAR.lng], 13);

/* =========================================================
   MAPA OPENSTREETMAP
========================================================= */

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap" }).addTo(map);

/* =========================================================
   MARCADOR DO BOTECO
========================================================= */

L.marker([BAR.lat, BAR.lng]).addTo(map).bindPopup("<strong>🍻 Boteco do Riba</strong><br>Local de saída");

/* =========================================================
   MARCADOR DO CLIENTE
========================================================= */

let marcadorCliente = null;


/* =========================================================
   EVENTOS DOS CAMPOS
========================================================= */

// Toda vez que o cliente digitar,
// o formulário será validado.

camposObrigatorios.forEach(campo => {campo.addEventListener("input", () => { validarFormulario();
        /*
        Se já existe um cliente salvo,
        atualiza os dados automaticamente.
        */
        atualizarDadosCliente();

    });

});

/* =========================================================
   CHECKBOX +18
========================================================= */

idade.addEventListener("change",validarFormulario);

/* =========================================================
   LOCALIZAR CLIENTE
========================================================= */

// Quando o cliente terminar de preencher o bairro,
// fazemos a busca do endereço.

bairro.addEventListener("blur",localizarCliente);

/* =========================================================
   BOTÃO ACESSAR CARDÁPIO
========================================================= */

entrar.addEventListener("click", () => {

    // Se estiver desativado, não faz nada.
    if (entrar.disabled) {return;}
    // Vai para a página dos produtos.
    window.location.href = "produtos.html";});

/* =========================================================
   LOCALIZAÇÃO DO CLIENTE
========================================================= */

async function localizarCliente() {

    // Verifica se os dados principais foram preenchidos.

    if (
        !endereco.value.trim() ||
        !bairro.value.trim() ||
        !cep.value.trim()
    ) {

        return;

    }


    /* =====================================================
       MOSTRA MENSAGEM NA TELA
    ===================================================== */

    distancia.textContent = "Localizando...";
    frete.textContent = "Calculando...";


    /* =====================================================
       CONSULTA DO ENDEREÇO
    ===================================================== */

    const consulta = `${endereco.value}, ${bairro.value}, Brasília, DF, Brasil`;

    try {
        const resposta = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=1&q=${encodeURIComponent(consulta)}`,
            {
                headers: {"Accept": "application/json"}
            }
        );

        // Verifica se houve erro na consulta.

        if (!resposta.ok) {

            throw new Error("Erro na consulta de localização.");
        }

        const dados = await resposta.json();

        /* =================================================
           ENDEREÇO NÃO ENCONTRADO
        ================================================= */

        if (!dados.length) {

            distancia.textContent = "Não localizado";

            frete.textContent = "Não calculado";

            validarFormulario();

            return;

        }


        /* =================================================
           PEGA AS COORDENADAS
        ================================================= */

        const lat = Number(dados[0].lat);

        const lng = Number(dados[0].lon);


        /* =================================================
           REMOVE MARCADOR ANTIGO
        ================================================= */

        if (marcadorCliente) {

            map.removeLayer(marcadorCliente);

        }


        /* =================================================
           CRIA MARCADOR DO CLIENTE
        ================================================= */

        marcadorCliente = L.marker(
            [lat, lng]
        )
            .addTo(map)
            .bindPopup(
                "<strong>📍 Sua entrega</strong>"
            );


        /* =================================================
           MOSTRA BOTECO + CLIENTE NO MAPA
        ================================================= */

        map.fitBounds(
            [
                [BAR.lat, BAR.lng],
                [lat, lng]
            ],
            {
                padding: [40, 40]
            }
        );


        /* =================================================
           CALCULA FRETE
        ================================================= */

        calcularFrete(
            lat,
            lng
        );

    } catch (erro) {

        console.error(
            "Erro ao localizar endereço:",
            erro
        );

        distancia.textContent =
            "Erro ao localizar";

        frete.textContent =
            "Não calculado";

        validarFormulario();

    }

}


/* =========================================================
   CÁLCULO DO FRETE
========================================================= */

function calcularFrete(lat, lng) {

    // Calcula a distância em quilômetros.

    const km =
        map.distance(
            [BAR.lat, BAR.lng],
            [lat, lng]
        ) / 1000;


    /* =====================================================
       REGRA DO FRETE
    ===================================================== */

    let valorFrete;


    // Até 3 km custa R$ 5,00.

    if (km <= 3) {

        valorFrete = 5;

    } else {

        // Acima de 3 km:
        // R$ 5 + R$ 1,50 por km adicional.

        valorFrete =
            5 + ((km - 3) * 1.5);

    }


    /* =====================================================
       MOSTRA NA TELA
    ===================================================== */

    distancia.textContent =
        `${km.toFixed(2)} km`;

    frete.textContent =
        formatarMoeda(valorFrete);


    /* =====================================================
       SALVA OS DADOS
    ===================================================== */

    salvarCliente(
        km,
        valorFrete
    );

}


/* =========================================================
   SALVAR CLIENTE
========================================================= */

function salvarCliente(km, valorFrete) {

    const cliente = {

        /* ================================================
           DADOS DO CLIENTE
        ================================================ */

        nome: nome.value.trim(),

        cep: cep.value.trim(),

        endereco: endereco.value.trim(),

        numero: numero.value.trim(),

        bairro: bairro.value.trim(),

        /*
        IMPORTANTE:
        Aqui pegamos exatamente o que o cliente
        digitou no campo referência.
        */

        referencia: referencia.value.trim(),


        /* ================================================
           DADOS DA ENTREGA
        ================================================ */

        distancia:
            Number(km.toFixed(2)),

        frete:
            Number(valorFrete.toFixed(2))

    };


    /* =====================================================
       SALVA NO NAVEGADOR
    ===================================================== */

    localStorage.setItem(
        "cliente",
        JSON.stringify(cliente)
    );


    // Atualiza o botão.

    validarFormulario();

}


/* =========================================================
   ATUALIZAR DADOS DO CLIENTE
========================================================= */

/*
Esta função resolve o problema da referência.

Se o cliente já tiver um cliente salvo e depois
alterar a referência, o novo texto será salvo
automaticamente.
*/

function atualizarDadosCliente() {

    const clienteSalvo =
        localStorage.getItem("cliente");


    // Se não existe cliente salvo, não faz nada.

    if (!clienteSalvo) {
        return;
    }


    try {

        const cliente =
            JSON.parse(clienteSalvo);


        /* ================================================
           ATUALIZA OS CAMPOS
        ================================================ */

        cliente.nome =
            nome.value.trim();

        cliente.cep =
            cep.value.trim();

        cliente.endereco =
            endereco.value.trim();

        cliente.numero =
            numero.value.trim();

        cliente.bairro =
            bairro.value.trim();

        /*
        AQUI ESTÁ A CORREÇÃO PRINCIPAL
        */

        cliente.referencia =
            referencia.value.trim();


        /* ================================================
           SALVA NOVAMENTE
        ================================================ */

        localStorage.setItem(
            "cliente",
            JSON.stringify(cliente)
        );


    } catch (erro) {

        console.error(
            "Erro ao atualizar cliente:",
            erro
        );

    }

}


/* =========================================================
   FORMATAÇÃO DE MOEDA
========================================================= */

function formatarMoeda(valor) {

    return (
        "R$ " +
        Number(valor)
            .toFixed(2)
            .replace(".", ",")
    );

}


/* =========================================================
   VALIDAÇÃO DO FORMULÁRIO
========================================================= */

function validarFormulario() {

    /* =====================================================
       VERIFICA SE TODOS OS CAMPOS ESTÃO PREENCHIDOS
    ===================================================== */

    const camposPreenchidos =
        camposObrigatorios.every(
            campo =>
                campo.value.trim() !== ""
        );


    /* =====================================================
       VERIFICA IDADE
    ===================================================== */

    const idadeConfirmada =
        idade.checked;


    /* =====================================================
       RECUPERA CLIENTE SALVO
    ===================================================== */

    const clienteSalvo =
        localStorage.getItem("cliente");


    /* =====================================================
       VALIDAÇÃO FINAL
    ===================================================== */

    const formularioValido =
        camposPreenchidos &&
        idadeConfirmada &&
        clienteSalvo;


    /* =====================================================
       ATIVA OU DESATIVA BOTÃO
    ===================================================== */

    entrar.disabled =
        !formularioValido;

}


/* =========================================================
   RECUPERAR DADOS SALVOS
========================================================= */

function recuperarCliente() {

    const clienteSalvo =
        localStorage.getItem("cliente");


    // Se não tiver cliente salvo, termina.

    if (!clienteSalvo) {
        return;
    }


    try {

        const cliente =
            JSON.parse(clienteSalvo);


        /* ================================================
           PREENCHE FORMULÁRIO
        ================================================ */

        if (cliente.nome) {

            nome.value =
                cliente.nome;

        }


        if (cliente.cep) {

            cep.value =
                cliente.cep;

        }


        if (cliente.endereco) {

            endereco.value =
                cliente.endereco;

        }


        if (cliente.numero) {

            numero.value =
                cliente.numero;

        }


        if (cliente.bairro) {

            bairro.value =
                cliente.bairro;

        }


        /*
        ================================================
        AQUI RECUPERA A REFERÊNCIA
        ================================================
        */

        if (cliente.referencia) {

            referencia.value =
                cliente.referencia;

        }


        /* ================================================
           MOSTRA DISTÂNCIA
        ================================================ */

        if (
            typeof cliente.distancia === "number"
        ) {

            distancia.textContent =
                `${cliente.distancia.toFixed(2)} km`;

        }


        /* ================================================
           MOSTRA FRETE
        ================================================ */

        if (
            typeof cliente.frete === "number"
        ) {

            frete.textContent =
                formatarMoeda(
                    cliente.frete
                );

        }


    } catch (erro) {

        console.error(
            "Erro ao recuperar cliente:",
            erro
        );


        // Apaga dados quebrados.

        localStorage.removeItem(
            "cliente"
        );

    }

}

// =========================================
// PEGAR ELEMENTOS
// =========================================

const imagens = document.querySelectorAll(".carousel-track img");

const imageModal = document.getElementById("imageModal");

const imagemGrande = document.getElementById("imagemGrande");

const fecharImagem = document.getElementById("fecharImagem");


// =========================================
// CLICAR NA IMAGEM
// =========================================

imagens.forEach(imagem => {

    imagem.addEventListener("click", () => {

        // Pega a imagem que foi clicada

        imagemGrande.src = imagem.src;

        // Abre a janela

        imageModal.classList.add("active");

    });

});


// =========================================
// FECHAR NO X
// =========================================

fecharImagem.addEventListener("click", () => {

    imageModal.classList.remove("active");

});


// =========================================
// FECHAR CLICANDO FORA DA IMAGEM
// =========================================

imageModal.addEventListener("click", (evento) => {

    if (evento.target === imageModal) {

        imageModal.classList.remove("active");

    }

});


// =========================================
// FECHAR COM ESC
// =========================================

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        imageModal.classList.remove("active");

    }

});

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

// Recupera os dados quando abrir a página.

recuperarCliente();


// Verifica se pode liberar o botão.

validarFormulario();