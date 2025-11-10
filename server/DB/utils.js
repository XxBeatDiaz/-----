export function filterItemsByStartsWith(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export function filterItemsByChars(items, chars) {
  return items.filter(item => item.title.toLowerCase().includes(chars.toLowerCase()));
}