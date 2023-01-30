import _ from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

const getFreeDomainsCount = (emails) => {
  const splitedEmails  = [];
  for (let email of emails) {
    const parts = email.split('@');
    email = _.last(parts);
    splitedEmails.push(email);
  }
  
  const filteredDomains = splitedEmails.filter((domain) =>      freeEmailDomains.includes(domain));
  //console.log(filteredDomains);

  const count = filteredDomains.reduce( (tally, domain) => {
  tally[domain] = (tally[domain] || 0) + 1 ;
  return tally;
  } , {})
  return count;
}
console.log(getFreeDomainsCount(emails));    