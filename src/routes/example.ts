import { IExampleType } from './../types';
import gatherResponse from '../misc';

const allowLocalDevApp = "http://localhost:3000"
const allowCloudDevApp = ""

const exampleData: IExampleType = {
    name: "Hey, what's going on",
    value: 1337
}

export default async function example(request: Request): Promise<Response> {
    const init = {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      };
      const response = await fetch('https://data.gov.au/data/dataset/138d9263-600f-4d35-993d-f1cec7ebcfdf/resource/ec9115f0-e762-4528-850b-ef7189ef18b4/download/city-of-casey.geojson', init);
      const results = await gatherResponse(response);
    return new Response(results, {
        status: 200,
        headers: { 'Access-Control-Allow-Origin': allowLocalDevApp }
    })
}
