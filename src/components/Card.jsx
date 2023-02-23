const Card = (props) => {

const {name, age, isPremium, country} = props.client

const isItPremium= isPremium ? 'Yes' : 'No'
const theme= isPremium? 'premium' : null

let greeting = ''
if (country === 'de'){
    greeting = 'Hallo'
} else if (country === 'en'){
    greeting = 'Hello'        
} else if (country === 'fr'){
    greeting = 'Bonjour'
} else if (country === 'es'){
    greeting='Hola'
}

return (
    <div div className={'card '+ theme}>
        <h3>{greeting} {name}</h3>
        <p>Age: {age}</p>
        <p>Is it a Premium client? {isItPremium}</p>
    </div>
) }

export default Card;