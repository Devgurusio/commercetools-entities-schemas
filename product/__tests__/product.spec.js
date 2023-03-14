const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../product');

describe('product', () => {
  let ajv;
  let valid;

  describe('when success', () => {
    let data;

    beforeAll(() => {
      data = {
        id: '7217f75f-5931-42f0-8029-9dd51513c221',
        version: 245,
        lastMessageSequenceNumber: 117,
        createdAt: '2019-02-06T11:21:10.852Z',
        lastModifiedAt: '2019-02-07T10:48:09.424Z',
        lastModifiedBy: {
          user: {
            typeId: 'user',
            id: '49f30471-80d5-4ade-b14f-dceb76d93d93'
          }
        },
        createdBy: {
          user: {
            typeId: 'user',
            id: '49f30471-80d5-4ade-b14f-dceb76d93d93'
          }
        },
        productType: {
          typeId: 'product-type',
          id: 'b4c89e96-beb4-48c7-ba84-f13d2970f01a'
        },
        catalogs: [],
        masterData: {
          current: {
            name: {
              en: 'AVENGERS4'
            },
            description: {
              en: 'Avengers: Endgame blu-ray'
            },
            categories: [],
            categoryOrderHints: {},
            slug: {
              en: 'avengers4'
            },
            metaTitle: {
              en: 'ENDGAME'
            },
            metaDescription: {
              en: ''
            },
            masterVariant: {
              id: 1,
              sku: 'A1',
              key: 'A4_1',
              prices: [],
              images: [
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                }
              ],
              attributes: [
                {
                  name: 'weight',
                  value: 1
                }
              ],
              assets: []
            },
            variants: [
              {
                id: 2,
                sku: 'A2',
                key: 'A4_2',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-AAQJiqI1.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-lKqSQ6Bm.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 2
                  }
                ],
                assets: []
              },
              {
                id: 3,
                sku: 'A3',
                key: 'A4_3',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-D5HEMfV5.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-RdUIDRIc.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-x56NRg5k.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 3
                  }
                ],
                assets: []
              },
              {
                id: 4,
                sku: 'A4',
                key: 'A4_4',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-SdSur86I.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-w_qfEsTG.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-YqH7uKGQ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-_1MUn7zX.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 4
                  }
                ],
                assets: []
              },
              {
                id: 5,
                sku: 'A5',
                key: 'A4_5',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-sB54iPBb.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-fFzTbSsW.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-fII9YyJ3.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-ftv-WJIO.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 5
                  }
                ],
                assets: []
              },
              {
                id: 6,
                sku: 'A6',
                key: 'A4_6',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-cXKJmD2h.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-joNQ1EBO.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-BUAIku4V.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-T2zLRbt8.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 6
                  }
                ],
                assets: []
              },
              {
                id: 7,
                sku: 'A7',
                key: 'A4_7',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-fShNXDtq.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-St-MoygF.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-gqbb8qsR.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-N2pii-UQ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 7
                  }
                ],
                assets: []
              },
              {
                id: 8,
                sku: 'A8',
                key: 'A4_8',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-R_hVCbVH.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-u3Dkl5_x.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-IV3ipYDV.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-Sg8xf-mp.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 8
                  }
                ],
                assets: []
              },
              {
                id: 9,
                sku: 'A9',
                key: 'A4_9',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.naturtal.apron.6-4fciGhSC.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.naturtal.apron.c-FwHTh9Lz.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 9
                  }
                ],
                assets: []
              },
              {
                id: 10,
                sku: 'A10',
                key: 'A4_10',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-l4FQDGkb.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 10
                  }
                ],
                assets: []
              },
              {
                id: 11,
                sku: 'A11',
                key: 'A4_11',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_farmteam_ho-xJwILlux.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [],
                assets: []
              },
              {
                id: 12,
                sku: 'A12',
                key: 'A4_12',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-JRLLqzYz.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I--vgCHZan.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-PPtMnSre.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-GLFgPecQ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 12
                  }
                ],
                assets: []
              },
              {
                id: 13,
                sku: 'A13',
                key: 'A4_13',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg_water_bottle_met-UvozjGkq.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg_water_bottle_640-FGRGSC-D.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg_water_bottle_met-kAAkcaok.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 13
                  }
                ],
                assets: []
              },
              {
                id: 14,
                sku: 'A14',
                key: 'A4_14',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/diadechipotle.tween.-1mB3QYUD.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/dias.tween.crop-FCdWRH6N.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/diadechipotle.tween.-LZtgTgCH.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 14
                  }
                ],
                assets: []
              },
              {
                id: 15,
                sku: 'A15',
                key: 'A4_15',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-EeB2Y9pu.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 15
                  }
                ],
                assets: []
              },
              {
                id: 16,
                sku: 'A16',
                key: 'A4_16',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-_ctlHGh2.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 16
                  }
                ],
                assets: []
              },
              {
                id: 17,
                sku: 'A17',
                key: 'A4_17',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-T5oFf6dx.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 17
                  }
                ],
                assets: []
              },
              {
                id: 18,
                sku: 'A18',
                key: 'A4_18',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_v-lk9HnauD.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 18
                  }
                ],
                assets: []
              },
              {
                id: 19,
                sku: 'A19',
                key: 'A4_19',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-Bx564j-_.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-qVjb3y6X.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-PHLV9lJ_.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-3NgI1iNn.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 19
                  }
                ],
                assets: []
              },
              {
                id: 20,
                sku: 'A20',
                key: 'A4_20',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.child.apron.1280-bF6mCJyP.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.child.apron.640x-QR1UqEj_.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.child.apron..clo-xei_uwii.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 20
                  }
                ],
                assets: []
              },
              {
                id: 21,
                sku: 'A21',
                key: 'A4_21',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/piglet.kids.front-rKio1bKK.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/piglet.kids.crop-rtRF4ALC.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/Piglet-Kids-Detail-fGXkuHml.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/Piglet-Kids-back-7p48ePuh.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 21
                  }
                ],
                assets: []
              },
              {
                id: 22,
                sku: 'A22',
                key: 'A4_22',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle68.plain.twe-KWsSvd_n.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle.ripples.cro-vYk56lHn.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle68.plain.twe-WTWKAynJ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 22
                  }
                ],
                assets: []
              },
              {
                id: 23,
                sku: 'A23',
                key: 'A4_23',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-0_EnF0ID.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-ySysH6bW.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-L9uf9DQh.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-sJ8kGoiw.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 23
                  }
                ],
                assets: []
              },
              {
                id: 24,
                sku: 'A24',
                key: 'A4_24',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/sprayface.tween.fron-4lxpPW5K.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/sprayface.tween.crop-eXa-h91H.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/sprayface.tween.back-k_XCScSs.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 24
                  }
                ],
                assets: []
              },
              {
                id: 25,
                sku: 'A25',
                key: 'A4_25',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-47V3CCIt.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-jkUg41BD.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-BUrOnLvZ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-9-KT_7YJ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 25
                  }
                ],
                assets: []
              },
              {
                id: 26,
                sku: 'A26',
                key: 'A4_26',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.ChipotleIsMyLife-ua6KadDC.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Boorito.01.1280x-oQAkMhrv.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.IHeartBurritos.1-J47xHGwZ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.WouldRather.1280-z-SoWXRd.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Boorito.02.1280x-Hp3-jWmo.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 26
                  }
                ],
                assets: []
              },
              {
                id: 27,
                sku: 'A27',
                key: 'A4_27',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Tabasco.Scorpion-RfjZXJHg.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Scorpion.03.640x-33z7GsGu.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 27
                  }
                ],
                assets: []
              },
              {
                id: 28,
                sku: 'A28',
                key: 'A4_28',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle.medallion.w-3_Y487iD.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/medallion.womens.cro-XPN_uy2b.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/Chipotle-Medallion-W-TJ6jUJEH.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle.medallion.w-22oT5g11.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 28
                  }
                ],
                assets: []
              },
              {
                id: 29,
                sku: 'A29',
                key: 'A4_29',
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'weight',
                    value: 29
                  }
                ],
                assets: []
              }
            ],
            searchKeywords: {}
          },
          staged: {
            name: {
              en: 'AVENGERS4'
            },
            description: {
              en: 'Avengers: Endgame blu-ray'
            },
            categories: [],
            categoryOrderHints: {},
            slug: {
              en: 'avengers4'
            },
            metaTitle: {
              en: 'ENDGAME'
            },
            metaDescription: {
              en: ''
            },
            masterVariant: {
              id: 1,
              sku: 'A1',
              key: 'A4_1',
              prices: [],
              images: [
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-o83dH5_x.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-WxVGX_4x.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-5ZmCiie-.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                },
                {
                  url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate-7-oUQL1f14.jpg',
                  dimensions: {
                    w: 640,
                    h: 450
                  }
                }
              ],
              attributes: [
                {
                  name: 'weight',
                  value: 1
                }
              ],
              assets: []
            },
            variants: [
              {
                id: 2,
                sku: 'A2',
                key: 'A4_2',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-AAQJiqI1.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-lKqSQ6Bm.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 2
                  }
                ],
                assets: []
              },
              {
                id: 3,
                sku: 'A3',
                key: 'A4_3',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-D5HEMfV5.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-RdUIDRIc.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-x56NRg5k.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 3
                  }
                ],
                assets: []
              },
              {
                id: 4,
                sku: 'A4',
                key: 'A4_4',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-SdSur86I.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-w_qfEsTG.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-YqH7uKGQ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-_1MUn7zX.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 4
                  }
                ],
                assets: []
              },
              {
                id: 5,
                sku: 'A5',
                key: 'A4_5',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-sB54iPBb.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-fFzTbSsW.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-fII9YyJ3.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_loomstate_o-ftv-WJIO.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 5
                  }
                ],
                assets: []
              },
              {
                id: 6,
                sku: 'A6',
                key: 'A4_6',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-cXKJmD2h.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-joNQ1EBO.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-BUAIku4V.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_r-T2zLRbt8.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 6
                  }
                ],
                assets: []
              },
              {
                id: 7,
                sku: 'A7',
                key: 'A4_7',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-fShNXDtq.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-St-MoygF.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-gqbb8qsR.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_d-N2pii-UQ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 7
                  }
                ],
                assets: []
              },
              {
                id: 8,
                sku: 'A8',
                key: 'A4_8',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-R_hVCbVH.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-u3Dkl5_x.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-IV3ipYDV.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-Sg8xf-mp.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 8
                  }
                ],
                assets: []
              },
              {
                id: 9,
                sku: 'A9',
                key: 'A4_9',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.naturtal.apron.6-4fciGhSC.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.naturtal.apron.c-FwHTh9Lz.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 9
                  }
                ],
                assets: []
              },
              {
                id: 10,
                sku: 'A10',
                key: 'A4_10',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-l4FQDGkb.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 10
                  }
                ],
                assets: []
              },
              {
                id: 11,
                sku: 'A11',
                key: 'A4_11',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle_farmteam_ho-xJwILlux.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [],
                assets: []
              },
              {
                id: 12,
                sku: 'A12',
                key: 'A4_12',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-JRLLqzYz.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I--vgCHZan.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-PPtMnSre.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_I-GLFgPecQ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 12
                  }
                ],
                assets: []
              },
              {
                id: 13,
                sku: 'A13',
                key: 'A4_13',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg_water_bottle_met-UvozjGkq.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg_water_bottle_640-FGRGSC-D.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg_water_bottle_met-kAAkcaok.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 13
                  }
                ],
                assets: []
              },
              {
                id: 14,
                sku: 'A14',
                key: 'A4_14',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/diadechipotle.tween.-1mB3QYUD.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/dias.tween.crop-FCdWRH6N.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/diadechipotle.tween.-LZtgTgCH.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 14
                  }
                ],
                assets: []
              },
              {
                id: 15,
                sku: 'A15',
                key: 'A4_15',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-EeB2Y9pu.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 15
                  }
                ],
                assets: []
              },
              {
                id: 16,
                sku: 'A16',
                key: 'A4_16',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_c-_ctlHGh2.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 16
                  }
                ],
                assets: []
              },
              {
                id: 17,
                sku: 'A17',
                key: 'A4_17',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_f-T5oFf6dx.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 17
                  }
                ],
                assets: []
              },
              {
                id: 18,
                sku: 'A18',
                key: 'A4_18',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/loomstate_chipotle_v-lk9HnauD.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 18
                  }
                ],
                assets: []
              },
              {
                id: 19,
                sku: 'A19',
                key: 'A4_19',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-Bx564j-_.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-qVjb3y6X.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-PHLV9lJ_.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.toddler.growrow.-3NgI1iNn.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 19
                  }
                ],
                assets: []
              },
              {
                id: 20,
                sku: 'A20',
                key: 'A4_20',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.child.apron.1280-bF6mCJyP.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.child.apron.640x-QR1UqEj_.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.child.apron..clo-xei_uwii.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 20
                  }
                ],
                assets: []
              },
              {
                id: 21,
                sku: 'A21',
                key: 'A4_21',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/piglet.kids.front-rKio1bKK.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/piglet.kids.crop-rtRF4ALC.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/Piglet-Kids-Detail-fGXkuHml.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/Piglet-Kids-back-7p48ePuh.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 21
                  }
                ],
                assets: []
              },
              {
                id: 22,
                sku: 'A22',
                key: 'A4_22',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle68.plain.twe-KWsSvd_n.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle.ripples.cro-vYk56lHn.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle68.plain.twe-WTWKAynJ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 22
                  }
                ],
                assets: []
              },
              {
                id: 23,
                sku: 'A23',
                key: 'A4_23',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-0_EnF0ID.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-ySysH6bW.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-L9uf9DQh.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.sketchstac-sJ8kGoiw.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 23
                  }
                ],
                assets: []
              },
              {
                id: 24,
                sku: 'A24',
                key: 'A4_24',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/sprayface.tween.fron-4lxpPW5K.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/sprayface.tween.crop-eXa-h91H.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/sprayface.tween.back-k_XCScSs.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 24
                  }
                ],
                assets: []
              },
              {
                id: 25,
                sku: 'A25',
                key: 'A4_25',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-47V3CCIt.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-jkUg41BD.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-BUrOnLvZ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/cmg.youth.spraymedal-9-KT_7YJ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 25
                  }
                ],
                assets: []
              },
              {
                id: 26,
                sku: 'A26',
                key: 'A4_26',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.ChipotleIsMyLife-ua6KadDC.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Boorito.01.1280x-oQAkMhrv.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.IHeartBurritos.1-J47xHGwZ.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.WouldRather.1280-z-SoWXRd.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Boorito.02.1280x-Hp3-jWmo.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 26
                  }
                ],
                assets: []
              },
              {
                id: 27,
                sku: 'A27',
                key: 'A4_27',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Tabasco.Scorpion-RfjZXJHg.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/CMG.Scorpion.03.640x-33z7GsGu.jpg',
                    dimensions: {
                      w: 640,
                      h: 450
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 27
                  }
                ],
                assets: []
              },
              {
                id: 28,
                sku: 'A28',
                key: 'A4_28',
                prices: [],
                images: [
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle.medallion.w-3_Y487iD.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/medallion.womens.cro-XPN_uy2b.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/Chipotle-Medallion-W-TJ6jUJEH.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  },
                  {
                    url: 'https://2f1d769a82b31863dfb1-18fbb8f644d7cf23387d5276ade94aa9.ssl.cf1.rackcdn.com/chipotle.medallion.w-22oT5g11.jpg',
                    dimensions: {
                      w: 540,
                      h: 380
                    }
                  }
                ],
                attributes: [
                  {
                    name: 'weight',
                    value: 28
                  }
                ],
                assets: []
              },
              {
                id: 29,
                sku: 'A29',
                key: 'A4_29',
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'weight',
                    value: 29
                  }
                ],
                assets: []
              }
            ],
            searchKeywords: {}
          },
          published: true,
          hasStagedChanges: false
        },
        key: 'A4-ENDGAME',
        catalogData: {},
        taxCategory: {
          typeId: 'tax-category',
          id: '18a1d868-93f3-40b1-bab1-85563d16e4f3'
        },
        lastVariantId: 29
      };
      ajv = new Ajv();
      addFormats(ajv);
    });

    beforeEach(() => {
      valid = ajv.validate(schema, data);
    });

    test('should be valid', () => {
      expect(valid).toBeTruthy();
    });
  });
});
