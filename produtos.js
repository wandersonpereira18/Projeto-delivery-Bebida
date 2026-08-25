
const produtos = [

    /* ======================= CERVEJAS ========================= */

    {
        id: 1,
        nome: "Heineken 600ml",
        categoria: "Cervejas",
        descricao: "Cerveja puro malte. (Obs:Somente o líquido)",
        preco: 8.00,
        img: "Heineken_600ml.png"
    },

    {
        id: 2,
        nome: "Skol 600ml",
        categoria: "Cervejas",
        descricao: "(Obs:Somente o líquido)",
        preco: 6.00,
        img: "Skol.png"
    },

    {
        id: 3,
        nome: "Brahma 600ml",
        categoria: "Cervejas",
        descricao: "(Obs:Somente o líquido)",
        preco: 6.50,
        img: "Brahma.png"
    },

    {
        id: 4,
        nome: "Antarctica Original 600ml",
        categoria: "Cervejas",
        descricao: "(Obs:Somente o líquido)",
        preco: 6.50,
        img: "Antarctica_Original_600.png"
    },

    {
        id: 5,
        nome: "Spaten 600ml",
        categoria: "Cervejas",
        descricao: "(Obs:Somente o líquido)",
        preco: 9.00,
        img: "Spaten.png"
    },

    /* ======================= DESTILADOS ============================ */

    {
        id: 6,
        nome: "Jack Daniel's",
        categoria: "Destilados",
        descricao: "Whisky americano clássico, encorpado e marcante.",
        preco: 120.00,
        img: "Jack Daniel's.png"
    },

    {
        id: 7,
        nome: "Absolut Vodka",
        categoria: "Destilados",
        descricao: "Vodka sueca com sabor suave e equilibrado.",
        preco: 85.00,
        img: "Absolut Vodka.png"
    },

    {
        id: 8,
        nome: "Red Label",
        categoria: "Destilados",
        descricao: "Whisky intenso e versátil para diversas ocasiões.",
        preco: 110.00,
        img: "Red Label.png"
    },

    /* ========================== VINHOS =========================== */

    {
        id: 9,
        nome: "Vinho Tinto",
        categoria: "Vinhos",
        descricao: "Vinho tinto elegante para acompanhar sua noite.",
        preco: 45.00,
        img: "Vinho Tinto.png"
    },

    {
        id: 10,
        nome: "Vinho Suave",
        categoria: "Vinhos",
        descricao: "Opção suave e agradável para compartilhar.",
        preco: 38.00,
        img: "Vinho Suave.png"
    },

    /* ======================= PETISCOS ========================= */

    {
        id: 11,
        nome: "Batata Frita",
        categoria: "Petiscos",
        descricao: "Porção crocante e douradinha.",
        preco: 25.00,
        img: "Batata Frita.png"
    },

    {
        id: 12,
        nome: "Feijoada do Riba",
        categoria: "Petiscos",
        descricao: "Nossa tradicional feijoada, servida com acompanhamentos.",
        preco: 35.00,
        img: "Feijoada do Riba.png"
    },

    /* ======================= SEM ÁLCOOL ========================== */

    {
        id: 13,
        nome: "Coca-Cola",
        categoria: "Sem Álcool",
        descricao: "Refrigerante gelado para acompanhar seu pedido.",
        preco: 6.00,
        img: "Coca-Cola_2_litros.png"
    },

    {
        id: 14,
        nome: "Água Mineral",
        categoria: "Sem Álcool",
        descricao: "Preço unitário",
        preco: 4.00,
        img: "Água Mineral.png"
    },

    /* ==================== Cervejas Em Latas ============================ */

    {
        id: 15,
        nome: "Heineken 350 ml",
        categoria: "Cervejas Lata",
        descricao: "Preço unitário",
        preco: 4.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7SyCx-DbQzVN1OZYLZJt8-elqdEqBqtO0JR6SHTzYaw&s=10"
    },

    {
        id: 16,
        nome: "Skol 350 ml",
        categoria: "Cervejas Lata",
        descricao: "Preço unitário",
        preco: 4.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJU2xp6s0XM9d6B7oNlMt3bMKe33cyRQ4S_b8RMRPNwg&s=10"
    },

    {
        id: 17,
        nome: "Brahma 350 ml",
        categoria: "Cervejas Lata",
        descricao: "Preço unitário",
        preco: 4.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ONq7ow1G8unoEmdVPTov36iLlEZXJ5FEqKdhlbo0zQ&s"
    },
    {
        id: 18,
        nome: "Antarctica  350 ml",
        categoria: "Cervejas Lata",
        descricao: "Preço unitário",
        preco: 4.00,
        img: "https://mercantilnovaera.vtexassets.com/arquivos/ids/217350-800-450?v=638539059304300000&width=800&height=450&aspect=true"
    },

    {
        id: 19,
        nome: "Spaten 350 ml",
        categoria: "Cervejas Lata",
        descricao: "Preço unitário",
        preco: 4.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4sIkTmxi_q_srvdxP1HPTuauOsZj65SG7wXKOnmx5Q&s=10"
    }

];

/* ==================== ESTADO DA APLICAÇÃO ============================ */

let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
let cliente = JSON.parse(localStorage.getItem("cliente") || "{}");
let categoriaAtual = "Todos";
let termoBusca = "";

/* ====================== ELEMENTOS HTML ============================ */

const gridProdutos = document.getElementById("gridProdutos");
const listaCarrinho = document.getElementById("listaCarrinho");
const subtotalElement = document.getElementById("subtotal");
const taxaElement = document.getElementById("taxa");
const totalElement = document.getElementById("total");
const contadorCarrinho = document.getElementById("contadorCarrinho");
const contadorMobile = document.getElementById("contadorMobile");
const nenhumProduto = document.getElementById("nenhumProduto");
const buscarProduto = document.getElementById("buscarProduto");
const finalizar = document.getElementById("finalizar");

/* ======================= MOEDA =========================== */

function moeda(valor) {
    return Number(valor || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }
    );
}

/* =========================================================
   ESCAPAR TEXTO
   Evita problemas quando nomes tiverem caracteres especiais.
========================================================= */

function escaparHTML(texto) {
    return String(texto ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#0 39;");
}

/* ====================== RENDERIZAR PRODUTOS =========================== */

function renderProdutos() {
    if (!gridProdutos) return;
    const lista = produtos.filter(produto => {
        const categoriaOK = categoriaAtual === "Todos" || produto.categoria === categoriaAtual;
        const buscaOK = produto.nome.toLowerCase().includes(termoBusca.toLowerCase());
        return categoriaOK && buscaOK;
    });

    if (lista.length === 0) {
        gridProdutos.innerHTML = "";
        if (nenhumProduto) { nenhumProduto.style.display = "block"; }
        return;
    }

    if (nenhumProduto) {
        nenhumProduto.style.display = "none";
    }

    gridProdutos.innerHTML = lista.map((produto, index) => {
        return `
                <article
                    class="produto-card"
                    style="animation-delay: ${index * 0.05}s"
                >
                    <div class="produto-imagem">
                        <img
                            src="${produto.img}"
                            alt="${escaparHTML(produto.nome)}"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='Imagen/produtos/sem-imagem.png';"
                        >
                        <span class="produto-categoria">
                            ${escaparHTML(produto.categoria)}
                        </span>
                    </div>

                    <div class="produto-info">
                        <h3>
                            ${escaparHTML(produto.nome)}
                        </h3>

                        <p class="produto-descricao">
                            ${escaparHTML(produto.descricao)}
                        </p>

                        <div class="produto-bottom">

                            <strong class="produto-preco">
                                ${moeda(produto.preco)}
                            </strong>

                            <button
                                class="btn-adicionar"
                                type="button"
                                onclick="event.preventDefault(); event.stopPropagation(); adicionarCarrinho(${produto.id});"
                            >
                                + Adicionar
                            </button>

                        </div>

                    </div>

                </article>

            `;

    }).join("");

}

/* ====================== ADICIONAR PRODUTO =========================== */

function adicionarCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;
    const item = carrinho.find(p => p.id === id);
    if (item) {
        item.quantidade += 1;
    } else {
        carrinho.push({ id: id, quantidade: 1 });
    }
    salvarCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho 🍻`);
}

/* ===================== ALTERAR QUANTIDADE ============================== */

function alterarQuantidade(id, valor) {
    const item = carrinho.find(p => p.id === id);
    if (!item) return;
    item.quantidade += valor;

    // Nunca permite quantidade negativa

    if (item.quantidade <= 0) {
        carrinho = carrinho.filter(p => p.id !== id);
    }
    salvarCarrinho();
}

/* ====================== REMOVER PRODUTO ========================== */

function removerCarrinho(id) {
    carrinho = carrinho.filter(p => p.id !== id);
    salvarCarrinho();
    mostrarNotificacao("Produto removido do carrinho.");
}

/* ======================== SALVAR CARRINHO =========================== */

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderCarrinho();
}

/* ==================== RENDERIZAR CARRINHO =========================== */

function renderCarrinho() {
    if (!listaCarrinho) return;
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = `
            <div class="carrinho-vazio">
                <div class="empty-icon">
                 🛒
                </div>
                <h3>
                    Seu carrinho está vazio
                </h3>
                <p>
                    Adicione produtos para começar.
                </p>
            </div>
        `;
    } else {
        listaCarrinho.innerHTML = carrinho.map(item => {
            const produto = produtos.find(p => p.id === item.id);
            if (!produto) return "";
            const valorItem = produto.preco * item.quantidade;
            return `
                    <div class="item-carrinho">
                        <img
                            src="${produto.img}"
                            alt="${escaparHTML(produto.nome)}"
                            onerror="this.onerror=null; this.src='Imagen/produtos/sem-imagem.png';"
                        >

                        <div class="item-carrinho-info">
                            <div class="item-nome">
                                ${escaparHTML(produto.nome)}
                            </div>

                            <div class="item-preco">
                                ${moeda(produto.preco)}
                                cada
                            </div>

                            <div class="item-total">
                                ${moeda(valorItem)}
                            </div>

                            <div class="controles">
                                <button
                                    type="button"
                                    class="controle-btn"
                                    onclick="alterarQuantidade(${produto.id}, -1)"
                                    aria-label="Diminuir quantidade"
                                >
                                    −
                                </button>

                                <span class="quantidade">
                                    ${item.quantidade}
                                </span>

                                <button
                                    type="button"
                                    class="controle-btn"
                                    onclick="alterarQuantidade(${produto.id}, 1)"
                                    aria-label="Aumentar quantidade"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            class="btn-remover"
                            title="Remover produto"
                            aria-label="Remover ${escaparHTML(produto.nome)}"
                            onclick="removerCarrinho(${produto.id})"
                        >
                            🗑
                        </button>
                    </div>
                `;
        }).join("");
    }

    calcularTotais();
}

/* ========================= CALCULAR TOTAIS =========================== */

function calcularTotais() {
    let subtotal = 0;
    let quantidadeTotal = 0;
    carrinho.forEach(item => {
        const produto = produtos.find(p => p.id === item.id);
        if (!produto) return;
        subtotal += produto.preco * item.quantidade;
        quantidadeTotal += item.quantidade;
    });

    // Taxa salva pelo app.js

    const taxaEntrega =
        Number(cliente.frete) || 0;
    const total = subtotal + taxaEntrega;

    /*======================= VALORES NA TELA ==============================*/

    if (subtotalElement) {
        subtotalElement.textContent = moeda(subtotal);
    }

    if (taxaElement) {
        taxaElement.textContent = moeda(taxaEntrega);
    }

    if (totalElement) {
        totalElement.textContent = moeda(total);
    }

    /*======================= CONTADORES ================================*/

    if (contadorCarrinho) {
        contadorCarrinho.textContent = quantidadeTotal;
    }

    if (contadorMobile) {
        contadorMobile.textContent = quantidadeTotal;
    }

    /* ====================== BOTÃO FINALIZAR ============================*/

    if (finalizar) {
        finalizar.disabled = carrinho.length === 0;
        finalizar.style.opacity = finalizar.disabled ? "0.5" : "1";
        finalizar.style.cursor = finalizar.disabled ? "not-allowed" : "pointer";
    }
}

/* ====================== CATEGORIAS =========================== */

document
    .querySelectorAll(".categoria-btn")
    .forEach(botao => {
        botao.addEventListener("click", () => {
            document
                .querySelectorAll(".categoria-btn")
                .forEach(btn => { btn.classList.remove("active"); });
            botao.classList.add("active");
            categoriaAtual = botao.dataset.categoria;
            renderProdutos();
        }
        );
    });

/* ======================= BUSCA ========================= */

if (buscarProduto) {
    buscarProduto.addEventListener("input", event => {
        termoBusca = event.target.value;
        renderProdutos();
    }
    );
}

/* =================== FINALIZAR PEDIDO =================== */

if (finalizar) {
    finalizar.addEventListener("click", finalizarPedido);
}

function finalizarPedido() {

    /* ============ VERIFICA CARRINHO =====================*/

    if (carrinho.length === 0) {
        mostrarNotificacao("Seu carrinho está vazio.");
        return;
    }

    /* ================= RECUPERA CLIENTE NOVAMENTE ============*/

    cliente = JSON.parse(localStorage.getItem("cliente") || "{}");

    /* ================= DADOS DO CLIENTE =====================*/

    const nomeCliente = cliente.nome || "Não informado";
    const cepCliente = cliente.cep || "Não informado";
    const enderecoCliente = cliente.endereco || "Não informado";
    const numeroCliente = cliente.numero || "S/N";
    const bairroCliente = cliente.bairro || "Não informado";
    const referenciaCliente = cliente.referencia || "Não informado";

    /* ============== DISTÂNCIA ==============================*/

    const distanciaCliente = Number(cliente.distancia) || 0;

    /* ================== TAXA DE ENTREGA =====================*/

    const taxa = Number(cliente.frete) || 0;

    /* =============== CALCULA SUBTOTAL =======================*/

    let subtotal = 0;

    /* ==============MENSAGEM WHATSAPP =========================*/

    let mensagem = "";
    mensagem += "*PEDIDO - BOTECO DO RIBA*\n";
    mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    /* ============== CLIENTE =================================*/

    mensagem += "*DADOS DO CLIENTE*\n";
    mensagem += `Nome: ${nomeCliente}\n`;
    mensagem += `CEP: ${cepCliente}\n\n`;

    /* =================== ENDEREÇO ===========================*/

    mensagem += "*ENDEREÇO DE ENTREGA*\n";
    mensagem += `Endereço: ${enderecoCliente}\n`;
    mensagem += `Número: ${numeroCliente}\n`;
    mensagem += `Bairro: ${bairroCliente}\n`;
    mensagem += `Ponto de referência: ${referenciaCliente}\n\n`;

    /* ============= ENTREGA =========================*/

    mensagem += "*INFORMAÇÕES DA ENTREGA*\n";
    mensagem += `→ Distância: ${distanciaCliente.toFixed(2)} km\n`;
    mensagem += `→ Taxa de entrega: ${moeda(taxa)}\n\n`;
    mensagem += "━━━━━━━━━━━━━━━━━━━━\n\n";

    /* ===================== PRODUTOS =====================================*/

    mensagem += "*ITENS DO PEDIDO*\n\n";
    carrinho.forEach(item => {
        const produto = produtos.find(p => p.id === item.id);
        if (!produto) return;
        const valor = produto.preco * item.quantidade;
        subtotal += valor;
        mensagem += `→  *${item.quantidade}x ${produto.nome}*\n`;
        mensagem += `→  Unitário: ${moeda(produto.preco)}\n`;
        mensagem += `→  Total: ${moeda(valor)}\n\n`;
    });

    /* ======================== TOTAL ===============================*/

    const total = subtotal + taxa;
    mensagem += "━━━━━━━━━━━━━━━━━━━━\n\n";
    mensagem += `→ Subtotal: ${moeda(subtotal)}\n`;
    mensagem += `→ Entrega: ${moeda(taxa)}\n`;
    mensagem += `→ *TOTAL: ${moeda(total)}*\n\n`;
    mensagem += "━━━━━━━━━━━━━━━━━━━━\n";
    mensagem += "Obrigado pela preferência!";

    /* ================== WHATSAPP ================================*/

    const telefone = "5561920051547";
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`;
    window.open(url, "_blank");
}

/* =============== NOTIFICAÇÃO ===============================*/

const estiloNotificacao = document.createElement("style");
estiloNotificacao.textContent = `
    .notificacao {
        position: fixed;
        left: 50%;
        bottom: 30px;
        transform:translateX(-50%);
        z-index: 9999;
        padding:14px 22px;
        border-radius: 12px;
        background:linear-gradient(135deg, #E51012, #620606);
        color: #FFFFFF;
        font-weight: bold;
        box-shadow: 0 10px 30px rgba(0,0,0,.5);
        border: 1px solid rgba(255,215,0,.3);
        animation: notificacaoEntrada .3s ease;
    }

    .notificacao.saindo {
        animation: notificacaoSaida .3s ease forwards;
    }

    @keyframes notificacaoEntrada {
        from {opacity: 0;
            transform:translate(-50%, 20px);
        }

        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }

    @keyframes notificacaoSaida {
        to {
            opacity: 0;
            transform:translate(-50%, 20px);
        }
    }
`;

document.head.appendChild(estiloNotificacao);

/* =================== FUNÇÃO DE NOTIFICAÇÃO ============================ */

function mostrarNotificacao(mensagem) {

    // Remove notificação anterior

    const anterior = document.querySelector(".notificacao");
    if (anterior) {
        anterior.remove();
    }

    // Cria nova

    const notificacao = document.createElement("div");
    notificacao.className = "notificacao";
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);

    // Remove depois de alguns segundos

    setTimeout(() => {
        notificacao.classList.add("saindo");
        setTimeout(() => { notificacao.remove(); }, 300);
    }, 2500);
}

/* ===================== INICIALIZAÇÃO =========================== */

// Limpa produtos inválidos do carrinho

carrinho = carrinho.filter(item => {
    const produto = produtos.find(p => p.id === item.id);
    return produto && item.quantidade > 0;
});

// Salva carrinho limpo

localStorage.setItem("carrinho", JSON.stringify(carrinho));

// Renderiza página

renderProdutos();
renderCarrinho();

/* ============================================================
   CARRINHO MOBILE - CORREÇÃO DEFINITIVA
   ============================================================ */

(function () {

    "use strict";

    function iniciarCarrinhoMobile() {

        /*
         * IMPORTANTE:
         * Aqui usamos somente elementos que realmente possuem
         * identificação de carrinho.
         *
         * Não procuramos todos os botões da página.
         * Isso evita que "+ Adicionar" abra o carrinho.
         */

        const contadorDesktop =
            document.getElementById("contadorCarrinho");

        const contadorMobile =
            document.getElementById("contadorMobile");

        const listaCarrinho =
            document.getElementById("listaCarrinho");


        if (!listaCarrinho) {
            console.warn(
                "Carrinho: #listaCarrinho não encontrado."
            );

            return;
        }


        /*
         * Descobre o painel do carrinho.
         */

        let painelCarrinho =
            listaCarrinho.closest(
                "#carrinho, #painelCarrinho, .carrinho, .carrinho-painel, .cart-panel, aside"
            );


        /*
         * Caso não exista um seletor específico,
         * usamos o elemento pai da lista.
         */

        if (!painelCarrinho) {
            painelCarrinho =
                listaCarrinho.parentElement;
        }


        if (!painelCarrinho) {
            console.warn(
                "Carrinho: painel não encontrado."
            );

            return;
        }


        /*
         * CSS exclusivo para celular.
         */

        if (!document.getElementById(
            "carrinhoMobileStyle"
        )) {

            const style =
                document.createElement("style");

            style.id =
                "carrinhoMobileStyle";


            style.textContent = `

                @media (max-width: 768px) {

                    .carrinho-mobile-painel {

                        position: fixed !important;

                        top: 0 !important;
                        right: 0 !important;
                        bottom: 0 !important;
                        left: 0 !important;

                        width: 100% !important;
                        height: 100dvh !important;

                        max-width: 100% !important;
                        max-height: 100dvh !important;

                        z-index: 99999 !important;

                        background: #0b0b0b !important;

                        overflow: hidden !important;

                        transform:
                            translateX(100%) !important;

                        opacity: 0 !important;

                        visibility: hidden !important;

                        transition:
                            transform .30s ease,
                            opacity .20s ease,
                            visibility .30s ease !important;
                    }


                    .carrinho-mobile-painel.aberto {

                        transform:
                            translateX(0) !important;

                        opacity: 1 !important;

                        visibility: visible !important;
                    }


                    .carrinho-mobile-painel
                    #listaCarrinho {

                        height: calc(100dvh - 120px) !important;

                        overflow-y: auto !important;

                        -webkit-overflow-scrolling: touch !important;
                    }


                    .carrinho-mobile-fechar {

                        position: absolute !important;

                        top: 12px !important;
                        right: 12px !important;

                        width: 42px !important;
                        height: 42px !important;

                        border: none !important;

                        border-radius: 50% !important;

                        background: #E51012 !important;

                        color: #FFFFFF !important;

                        font-size: 28px !important;

                        font-weight: bold !important;

                        line-height: 42px !important;

                        text-align: center !important;

                        padding: 0 !important;

                        z-index: 100001 !important;

                        cursor: pointer !important;

                        touch-action: manipulation !important;
                    }


                    /*
                     * Impede que o contador interfira
                     * no clique do botão.
                     */

                    #contadorCarrinho,
                    #contadorMobile {

                        pointer-events: none !important;
                    }


                    /*
                     * Botões de adicionar continuam
                     * completamente independentes.
                     */

                    .btn-adicionar {

                        position: relative !important;

                        z-index: 10 !important;

                        pointer-events: auto !important;

                        touch-action: manipulation !important;
                    }

                }

            `;


            document.head.appendChild(style);
        }


        painelCarrinho.classList.add(
            "carrinho-mobile-painel"
        );


        /*
         * Cria botão fechar.
         */

        let botaoFechar =
            painelCarrinho.querySelector(
                ".carrinho-mobile-fechar"
            );


        if (!botaoFechar) {

            botaoFechar =
                document.createElement("button");

            botaoFechar.type =
                "button";

            botaoFechar.className =
                "carrinho-mobile-fechar";

            botaoFechar.innerHTML =
                "×";

            botaoFechar.setAttribute(
                "aria-label",
                "Fechar carrinho"
            );


            painelCarrinho.appendChild(
                botaoFechar
            );
        }


        /*
         * Abre o carrinho.
         */

        function abrirCarrinho() {

            if (
                window.innerWidth > 768
            ) {
                return;
            }


            painelCarrinho.classList.add(
                "aberto"
            );


            document.body.style.overflow =
                "hidden";
        }


        /*
         * Fecha o carrinho.
         */

        function fecharCarrinho() {

            painelCarrinho.classList.remove(
                "aberto"
            );


            document.body.style.overflow =
                "";
        }


        /*
         * Botão de fechar.
         */

        botaoFechar.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                fecharCarrinho();

            }
        );


        /*
         * --------------------------------------------------------
         * LOCALIZA SOMENTE O BOTÃO DO CARRINHO
         * --------------------------------------------------------
         *
         * Não usamos:
         *
         * document.querySelectorAll("button")
         *
         * porque isso poderia capturar os botões
         * "+ Adicionar".
         */


        const possiveisBotoes = [

            document.getElementById(
                "btnCarrinho"
            ),

            document.getElementById(
                "carrinhoBtn"
            ),

            document.getElementById(
                "botaoCarrinho"
            ),

            document.getElementById(
                "abrirCarrinho"
            ),

            document.getElementById(
                "cartButton"
            ),

            document.getElementById(
                "cartBtn"
            )

        ].filter(Boolean);


        /*
         * Se o contador estiver dentro do botão,
         * usamos o botão pai.
         */

        if (contadorMobile) {

            const botaoPai =
                contadorMobile.closest(
                    "button, a, [role='button']"
                );


            if (botaoPai) {

                possiveisBotoes.push(
                    botaoPai
                );
            }
        }


        if (contadorDesktop) {

            const botaoPai =
                contadorDesktop.closest(
                    "button, a, [role='button']"
                );


            if (botaoPai) {

                possiveisBotoes.push(
                    botaoPai
                );
            }
        }


        /*
         * Remove duplicados.
         */

        const botoesUnicos =
            [...new Set(possiveisBotoes)];


        /*
         * Adiciona evento somente nos botões
         * identificados como carrinho.
         */

        botoesUnicos.forEach(
            function (botao) {

                if (
                    botao.dataset
                        .carrinhoMobileAtivo ===
                    "true"
                ) {
                    return;
                }


                botao.dataset
                    .carrinhoMobileAtivo =
                    "true";


                botao.addEventListener(
                    "click",
                    function (event) {

                        /*
                         * Só interfere no celular.
                         */

                        if (
                            window.innerWidth > 768
                        ) {
                            return;
                        }


                        /*
                         * Impede somente o clique
                         * do botão do carrinho.
                         */

                        event.preventDefault();

                        event.stopPropagation();


                        if (
                            painelCarrinho.classList
                                .contains("aberto")
                        ) {

                            fecharCarrinho();

                        } else {

                            abrirCarrinho();
                        }

                    }
                );

            }
        );


        /*
         * Fecha ao pressionar ESC.
         */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    fecharCarrinho();
                }

            }
        );


        /*
         * Quando voltar para desktop,
         * remove o estado mobile.
         */

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 768
                ) {

                    fecharCarrinho();
                }

            }
        );

    }


    /*
     * Aguarda o HTML carregar.
     */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            iniciarCarrinhoMobile
        );

    } else {

        iniciarCarrinhoMobile();
    }

})();
