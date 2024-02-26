import getPb from "../getPb";

async function getItemsPaginated(page = 1): Promise<PbPagination<Item>> {
  const pb = await getPb();

  const items = await fetch(
    `${process.env.PB_URL}/api/collections/items/records?page=${page}`,
    {
      headers: {
        Authorization: pb.authStore.token,
      },
    }
  ).then((res) => res.json());

  return items;
}

export default getItemsPaginated;
