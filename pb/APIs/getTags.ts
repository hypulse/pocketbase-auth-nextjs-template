import getPb from "../getPb";

async function getItems(): Promise<Item[]> {
  const pb = await getPb();

  const items = pb.collection("items").getFullList();

  return items;
}

export default getItems;
