import 'ua-parser-js'

const parser = new UAParser();
const os = parser.getOS().name;

export default function isMobile(){
    if(os === 'Android' || os === 'iOS'){return true}
    else{return false}
}