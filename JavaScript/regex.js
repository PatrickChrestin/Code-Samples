deleteWhiteSpaceBeforeAndAfter = (string) =>{
    let regex = /(^\s*|\s*$)/g;
    return string.replace(regex, "");
}
