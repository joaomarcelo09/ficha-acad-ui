import { enumTelephone } from '../enum/telephone'

export async function validateNumber(number: string) {
    const valid = number.replace(/\D/g, '').slice(2)

    if (valid.length === 9 && valid[0] === '9') {
        return enumTelephone.CEL
    } else if (valid.length === 8 && /^[2-5]/.test(valid)) {
        return enumTelephone.TEL
    } else {
        return new Error('Número Inválido')
    }
}