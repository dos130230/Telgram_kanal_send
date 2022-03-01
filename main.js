const token = '5129439956:AAFSdszc_FXbh07mhhrQfVHTGcjR6wmvIz4'
const chat_id = -1001569041413

const api = `https://api.telegram.org/bot${token}/?chat_id=${chat_id}&text=`


errorMessage.textContent = null
form.onsubmit = (event) => {
    try {
        event.preventDefault()
        if (!fname.value || !lname.value || !country.value || !subject.value) throw new Error("Forma toldirsh shart!")
        if (fname.value.length > 20) throw new Error("Ism uzunligi max 20")
        if (lname.value.length > 20)  throw new Error("Familya uzunligi max 20")
        if (subject.value.length > 5000)  throw new Error("Subject uzunligi max 5000")
            let message = `-Ism: ${fname.value} %0A%0A-Familyasi: ${lname.value} %0A%0A-Qo'shimcha malumot : ${subject.value}`
        let sticker = fetch(`https://api.telegram.org/bot${token}/sendSticker?chat_id=${chat_id}&sticker=` +country.value)
        let text = fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=`+ message)
        fname.value = null
        fname.lname = null
        fname.country = null
        fname.subject = null
    } catch (error) {
        errorMessage.textContent = error.message
    }
}
