export const parseLinkHeader = (linkHeader: any) => {
  const links = linkHeader.split(',');
  const parsedLinks: any = {};
  links.forEach((link: string) => {
    const section = link.split(';');
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    parsedLinks[name] = url;
  });
  return parsedLinks;
}