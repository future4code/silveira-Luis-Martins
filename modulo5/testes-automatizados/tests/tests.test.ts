import { performPurchase, User } from '../src';



test('Balance greater than the purchase amount', () => {

  const user: User = {

    name: 'User',
    balance: 100,
  };

  const result = performPurchase(user, 40);

  expect(result).toStrictEqual({

    name: 'User',
    balance: 60,
  });
});


test('Balance equal to the purchase price', () => {

  const user: User = {

    name: 'User',
    balance: 50,
  };

  const result = performPurchase(user, 50);

  expect(result).toStrictEqual({
    name: 'User',
    balance: 0,
  });
});



test('Balance less than purchase amount', () => {

  const user: User = {

    name: 'User',
    balance: 30,
  };

  const result = performPurchase(user, 80);

  expect(result?.balance).toBeLessThan(0);
});