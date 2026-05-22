// Percepção (Ambiente: "escuro" ou "claro")

const ambiente = "escuro";

//Regra Racional (Tomada de decisão)

if (ambiente === "escuro") {
    console.log("[Atuador]: Lâmpada ACESA");
} else {
    console.log("[Atuador]: Lâmpada APAGADA");
}

//Ar-condicionado / Termostrato

const temperaturaAlvo = 22;
const temperaturaAtual = 21;
//Percepção do sensor

//Regra Racional
if (temperaturaAtual > temperaturaAlvo) {
    console.log("[Atuador]: Ligar motor para RESFRIAR");
} else {
    console.log("[Atuador]: DESLIGAR motor, temperatura ideal aingida");
}