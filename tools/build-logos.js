// Rebuilds logos.js and regions.js (embedded base64 webp) from the image files in assets/.
// Usage: node tools/build-logos.js
const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const man=JSON.parse(fs.readFileSync(path.join(root,'assets/logos/manifest.json'),'utf8'));
const L={};for(const [team,file] of Object.entries(man))L[team]=fs.readFileSync(path.join(root,'assets/logos',file)).toString('base64');
fs.writeFileSync(path.join(root,'logos.js'),'window.GCD_LOGOS='+JSON.stringify(L)+';');
const RG={};for(const f of fs.readdirSync(path.join(root,'assets/regions')))RG[path.basename(f,'.webp')]=fs.readFileSync(path.join(root,'assets/regions',f)).toString('base64');
fs.writeFileSync(path.join(root,'regions.js'),'window.GCD_REGLOGOS='+JSON.stringify(RG)+';');
console.log(Object.keys(L).length+' team logos, '+Object.keys(RG).length+' region logos');
