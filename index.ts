'use strict';

import { mkdirSync, writeFileSync } from "fs";

const attrs = [{
  name:'Attributes1',
  values:['a','b','c','d', 'e']
},{
  name:'Attributes2',
  values:['a','b','c','d', 'e']
},{
  name:'Attributes3',
  values:['a','b','c','d', 'e']
}]


const getRandom = (max:number) => {
  return Math.round(Math.random()*(max))
}

const main = async () => {
  const name = 'Tabi Test'

  const total = 1500
  try {
    mkdirSync('metadatas')
  } catch (error) {
  }

  for (let tokenId = 0; tokenId <total; tokenId++) {
    const attributes = []
      for (let idx = 0; idx < attrs.length; idx++) {
        const element = attrs[idx];
        const random = getRandom(element.values.length)
        console.log('[ random ] >', random)
        attributes.push({
          trait_type:element.name,
          value:element.values[random]
        })
        
      }

      const metadata = {
        "name": `${name} #${tokenId}`,
        "description": name, 
        "image": "https://ipfs.tabi.lol/sbt/test/tabi.png", 
        "attributes": attributes
      }

       writeFileSync(`./metadatas/${tokenId}`,JSON.stringify(metadata, undefined, 4))
  }

}

main()