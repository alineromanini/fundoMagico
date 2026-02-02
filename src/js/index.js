document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector(".form-group");
    const descriptionInput = document.getElementById("description");

    const codigoHtml = document.getElementById("html-code");
    const codigoCss = document.getElementById("css-code");
    const secaoPreview = document.getElementById("preview-section");

    formulario.addEventListener("submit", async function (event) {
        event.preventDefault();

        const description = descriptionInput.value.trim();
        if (!description) return;

        mostrarCarregamento(true);

        try {
            const resposta = await fetch(
                "https://alineromas.app.n8n.cloud/webhook/fundo-magico",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ description }),
                }
            );
            const dados = await resposta.json();
            codigoHtml.textContent = dados.html || ""
            codigoCss.textContent = dados.css || "";
            secaoPreview.style.display = "block";

            secaoPreview.innerHTML = dados.html || "";

            let tagEstilo = document.getElementById("estilo-dinamico");
            if (tagEstilo) {
                tagEstilo.remove();
            }

            if (dados.css) {
                tagEstilo = document.createElement("style");
                tagEstilo.id = "estilo-dinamico";
                tagEstilo.textContent = dados.css;
                document.head.appendChild(tagEstilo);
            }
        } catch (error) {
            console.error("Erro ao gerar o background mágico:", error);
            codigoHtml.textContent = "Erro ao gerar o HTML, tente novamente.";
            codigoCss.textContent = "Erro ao gerar o CSS, tente novamente.";
            secaoPreview.innerHTML = "<p>Erro ao carregar o preview, tente novamente.</p>";

        } finally {
            mostrarCarregamento(false);
        }
    });

    function mostrarCarregamento(estaCarregando) {
        const botaoEnviar = document.getElementById("generate-btn");

        if (estaCarregando) {
            botaoEnviar.disabled = true;
            botaoEnviar.textContent = "Carregando...";
        } else {
            botaoEnviar.disabled = false;
            botaoEnviar.textContent = "Gerar Background Mágico";
        }
    }
});
