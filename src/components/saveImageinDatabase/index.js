import RESTAPI from '../../REST API';

const saveItemInDatabase = async (information) => {

  const promise = await fetch(RESTAPI.name, {
    method: 'POST',
    body: JSON.stringify(information),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  await promise.json();
};

export default saveItemInDatabase;
