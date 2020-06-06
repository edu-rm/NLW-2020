import { Request, Response } from 'express';

import knex from '../database/connection';

class ItemsController{
  async index(req : Request, res : Response){
    const items = await knex('items').select('*');
  
    // serialização de dados: transformar dados para que seja acessível ao requisitor
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        name: item.name,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });
  
    return res.json(serializedItems);
  }
 

}

export default ItemsController;