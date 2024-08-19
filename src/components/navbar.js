import React from "react";

const Navbar = () => {
    return <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">barkodv v1</a>
 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                            <a class="nav-link" href="/ekle">ekle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/listele">listele</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/güncelle">güncelle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/sil">sil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/satış">satış</a>
                        </li>

                    </ul>

                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/giriş">giriş</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/çıkış">çıkış</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
}
export default Navbar;