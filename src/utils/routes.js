export const getRoutesFor = (url) => {
  const prefix = url ? `/${url}` : "";
  return [
    { name: "Что делает приворот?", path: `${prefix}#about` },
    { name: "Процент успеха", path: `${prefix}#success-rate` },
    { name: "Для кого это?", path: `${prefix}#target-audience` },
    { name: "Отзывы", path: `${prefix}#reviews` },
    { name: "Получить скидку", path: `${prefix}#discount-steps` },
  ];
};
