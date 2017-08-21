/*eslint-disable */

export const styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default',
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default',
  },

  menu: {
    border: 'solid 1px #ccc',
  },

  input: {
    display: 'block',
    padding: '10px 16px',
    width: '100%',
    height: '46px',
    outline: '0',
    border: '1px solid #ccc',
    'border-radius': '0',
    background: '#fff',
    'box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    color: '#616161',
    'font-size': '18px',
    'line-height': '1.3333333',
    transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
  },
};

export const inputProps = {
  placeholder: {
    placeholder: 'Username',
  },
};

export function matchNameToTerm(user, value) {
  return (
    user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    user.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

/**
 * An example of how to implement a relevancy-based sorting method. States are
 * sorted based on the location of the match - For example, a search for "or"
 * will return "Oregon" before "North Carolina" even though "North Carolina"
 * would normally sort above Oregon. Strings where the match is in the same
 * location (or there is no match) will be sorted alphabetically - For example,
 * a search for "or" would return "North Carolina" above "North Dakota".
 */
export function sortName(a, b, value) {
  const aLower = a.name.toLowerCase();
  const bLower = b.name.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
}

export function fakeRequest(value, cb) {
  return setTimeout(
    cb,
    500,
    value
      ? getNames().filter(state => matchNameToTerm(user, value))
      : getNames(),
  );
}

export function getNames() {
  return [
    { abbr: '1', name: 'Aaren' },
    { abbr: '2', name: 'Aarika' },
    { abbr: '3', name: 'Abagael' },
    { abbr: '4', name: 'Cameron' },
    { abbr: '5', name: 'Caroline' },
    { abbr: '6', name: 'Cody' },
    { abbr: '7', name: 'Dong' },
    { abbr: '8', name: 'Francis' },
    { abbr: '9', name: 'George' },
    { abbr: '10', name: 'Helen' },
    { abbr: '11', name: 'Iitame' },
    { abbr: '12', name: 'Karen' },
    { abbr: '13', name: 'Ken' },
    { abbr: '14', name: 'Louise' },
    { abbr: '15', name: 'Margaret' },
    { abbr: '16', name: 'Mary' },
    { abbr: '17', name: 'Massey' },
    { abbr: '18', name: 'Michael' },
    { abbr: '19', name: 'Minnie' },
    { abbr: '20', name: 'Naomi' },
    { abbr: '21', name: 'Neil' },
    { abbr: '22', name: 'NaeNae' },
    { abbr: '23', name: 'Olie' },
    { abbr: '24', name: 'Penny' },
    { abbr: '25', name: 'Rick' },
    { abbr: '26', name: 'Sam' },
    { abbr: '27', name: 'Samantha' },
    { abbr: '28', name: 'Toby' },
    { abbr: '29', name: 'Ursula' },
    { abbr: '30', name: 'Vicktor' },
    { abbr: '31', name: 'Wilma' },
  ];
}

/*eslint-enable */
