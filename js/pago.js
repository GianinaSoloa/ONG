
    const pagar = async (price) =>{
        let items = [
            {
                title: "Doná:",
                description: "Donar",
                quantity: 1,
                currency_id: "ARS",
                unit_price: price
            }
        ]
        let response = await fetch("https://api.mercadopago.com/checkout/preferences",{
            method: "POST",
            headers:{
                Authorization: "Bearer TEST-7862454120709557-101309-938870be06f41d4033bd4b2338fd93cc-158929389"
            },
            body: JSON.stringify({
                items: items
            })
        })
        let data = await response.json();
        window.open(data.init_point, "_blank")
    }