const translations = {
  es: {
    nav_noticias: "Noticias",
    nav_videos: "Videos",
    nav_blog: "Blog",
    nav_leyes: "Leyes",
    nav_contacto: "Contacto",
    hero_subtitle: "Noticias, leyes, entrevistas y realidades de la migración en España",
    section_noticias: "Últimas Noticias",
    contenido_noticias: "Aquí aparecerán las últimas noticias relacionadas con migrantes en España.",
    section_videos: "Últimos Videos",
    section_blog: "Blog",
    blog_1_title: "Historia de Ana desde Venezuela",
    blog_1_text: "Ana llegó a España en 2019 buscando mejores oportunidades para su familia...",
    section_leyes: "Leyes y Derechos",
    contenido_leyes: "Información actualizada sobre leyes de extranjería, regularización y recursos legales.",
    section_contacto: "Contacto",
    contacto_texto: "¿Quieres compartir tu historia o colaborar? Escríbenos a contacto@panoramamigrante.com",
    footer_derechos: "Todos los derechos reservados."
  },
  en: {
    nav_noticias: "News",
    nav_videos: "Videos",
    nav_blog: "Blog",
    nav_leyes: "Laws",
    nav_contacto: "Contact",
    hero_subtitle: "News, laws, interviews and realities of migration in Spain",
    section_noticias: "Latest News",
    contenido_noticias: "Here you will find the latest news related to migrants in Spain.",
    section_videos: "Latest Videos",
    section_blog: "Blog",
    blog_1_title: "Ana's Story from Venezuela",
    blog_1_text: "Ana arrived in Spain in 2019 seeking better opportunities for her family...",
    section_leyes: "Laws and Rights",
    contenido_leyes: "Updated information on immigration laws, regularization and legal resources.",
    section_contacto: "Contact",
    contacto_texto: "Want to share your story or collaborate? Write to us at contacto@panoramamigrante.com",
    footer_derechos: "All rights reserved."
  },
  fr: {
    nav_noticias: "Actualités",
    nav_videos: "Vidéos",
    nav_blog: "Blog",
    nav_leyes: "Lois",
    nav_contacto: "Contact",
    hero_subtitle: "Actualités, lois, interviews et réalités de la migration en Espagne",
    section_noticias: "Dernières Actualités",
    contenido_noticias: "Voici les dernières nouvelles concernant les migrants en Espagne.",
    section_videos: "Dernières Vidéos",
    section_blog: "Blog",
    blog_1_title: "L'histoire d'Ana du Venezuela",
    blog_1_text: "Ana est arrivée en Espagne en 2019 à la recherche de meilleures opportunités pour sa famille...",
    section_leyes: "Lois et Droits",
    contenido_leyes: "Informations à jour sur les lois d'immigration, la régularisation et les ressources juridiques.",
    section_contacto: "Contact",
    contacto_texto: "Vous souhaitez partager votre histoire ou collaborer ? Écrivez-nous à contacto@panoramamigrante.com",
    footer_derechos: "Tous droits réservés."
  }
};

const selector = document.getElementById("language-select");
selector.addEventListener("change", () => {
  const lang = selector.value;
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerText = translations[lang][key];
  });
});