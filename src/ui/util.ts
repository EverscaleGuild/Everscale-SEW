export function dicebear(data: string, algorithm = 'pixel-art') {
    return `https://avatars.dicebear.com/api/${algorithm}/${data}.svg`
}

export function avatarsRender(user: string, algorithm = 'pixel-art') {
    return `<img class="card-img-top" alt="${user}" src="${dicebear(user, algorithm)}">`
}

import * as bootstrap from 'bootstrap'

export function loginModalHide() {
    const loginModal = document.getElementById('loginModal')
    const modal = bootstrap.Modal.getInstance(loginModal)
    modal.hide()
}
