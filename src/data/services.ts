import { photos, type Photo } from './photos'

export interface Service {
  id: string
  title: string
  description: string
  photo: Photo
  /** preencher apenas com valores reais, ex.: 'R$ 40' */
  price?: string
}

export const services: Service[] = [
  { id: 'produto1', title: 'Pasta Orange', description: 'Modelagem na medida, brilho natural e estilo sem esforço. Seu visual no controle, do começo ao fim do dia.', photo: photos.pastaFox, price: 'R$ 30' },
  { id: 'produto2', title: 'Creme Pistache', description: 'Leveza, movimento e acabamento seco. Para quem prefere um visual natural, sem abrir mão da personalidade.', photo: photos.cremePistache, price: 'R$ 30' },
  { id: 'produto3', title: 'Wax Toque Seco', description: 'Fixação forte, acabamento seco e liberdade para modelar. Controle dos fios sem aquele aspecto endurecido.', photo: photos.waxToqueSeco, price: 'R$ 30' },
  { id: 'produto4', title: 'Pasta Premium', description: 'Fixação extraforte, brilho natural e acabamento de respeito. Para um penteado que mantém sua identidade.', photo: photos.pastaPremium, price: 'R$ 30' },
  { id: 'produto5', title: 'Mega Stone', description: 'Controle máximo e brilho natural para um penteado marcante. Feito para quem não deixa o estilo sair do lugar.', photo: photos.gelStone, price: 'R$ 30' },
]
