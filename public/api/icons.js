const icons = {
  'branch': '<svg xmlns="http://www.w3.org/2000/svg" class="m-auto icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="7" cy="18" r="2" /><circle cx="7" cy="6" r="2" /><circle cx="17" cy="6" r="2" /><line x1="7" y1="8" x2="7" y2="16" /><path d="M9 18h6a2 2 0 0 0 2 -2v-5" /><polyline points="14 14 17 11 20 14" /></svg>',
  'experimental': '<svg xmlns="http://www.w3.org/2000/svg" class="m-auto icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" /><circle cx="12" cy="12" r="7" /></svg>',
  'alpha': '<svg xmlns="http://www.w3.org/2000/svg" class="m-auto icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" /><line x1="7" y1="13" x2="17" y2="13" /></svg>',
  'beta': '<svg xmlns="http://www.w3.org/2000/svg" class="m-auto icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" /><line x1="7" y1="12" x2="13" y2="12" /></svg>',
  'gamma': '<svg xmlns="http://www.w3.org/2000/svg" class="m-auto icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-2h-4" /></svg>',
  'release': '<svg xmlns="http://www.w3.org/2000/svg" class="m-auto icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" /><line x1="12" y1="13" x2="17" y2="20" /></svg>'
}

// eslint-disable-next-line no-unused-vars
function getBuildTypeIcon(icon) {
  return icons[icon];
}
