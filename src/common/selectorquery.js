export async function selectorquery(element) {
  let eleminfo = {};
  const query = uni.createSelectorQuery().in(this);

  let data = query
    .select(element)
    .boundingClientRect((data) => {
      return data;
    })
    .exec();
}
