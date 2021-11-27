import {
  formatDay,
  formatFriendlyDate,
  formatTime,
  formatFriendlyTime,
  formatShortDate,
  formatShortHour,
  getFromLocalStorage,
  setToLocalStorage,
  roundNumberOrZero,
  zeroIfUndefined,
} from './Utils';

describe('Utils', () => {
  describe('formatTime', () => {
    it('Returns the correct format when a valid date with time is passed', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 13, 54);

      // Action
      const formattedTime = formatTime(aDate);

      // Assert
      expect(formattedTime).toBe('13:54');
    });

    it('Returns the correct format when a time is below 10 AM', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 9, 33);

      // Action
      const formattedTime = formatTime(aDate);

      // Assert
      expect(formattedTime).toBe('9:33');
    });
  });

  describe('formatDay', () => {
    it('Returns Mon when the date is on a Monday', () => {
      // Arrange
      const aDate = new Date(2021, 10, 22);

      // Action
      const formattedDay = formatDay(aDate);

      // Assert
      expect(formattedDay).toBe('Mon');
    });

    it('Returns Tue when the date is on a Tuesday', () => {
      // Arrange
      const aDate = new Date(2021, 10, 23);

      // Action
      const formattedDay = formatDay(aDate);

      // Assert
      expect(formattedDay).toBe('Tue');
    });

    it('Returns Wed when the date is on a Wednesday', () => {
      // Arrange
      const aDate = new Date(2021, 10, 24);

      // Action
      const formattedDay = formatDay(aDate);

      // Assert
      expect(formattedDay).toBe('Wed');
    });

    it('Returns Thu when the date is on a Thursday', () => {
      // Arrange
      const aDate = new Date(2021, 10, 25);

      // Action
      const formattedDay = formatDay(aDate);

      // Assert
      expect(formattedDay).toBe('Thu');
    });

    it('Returns Fri when the date is on a Friday', () => {
      // Arrange
      const aDate = new Date(2021, 10, 26);

      // Action
      const formattedDay = formatDay(aDate);

      // Assert
      expect(formattedDay).toBe('Fri');
    });

    it('Returns Sat when the date is on a Saturday', () => {
      // Arrange
      const aDate = new Date(2021, 10, 27);

      // Action
      const formattedDay = formatDay(aDate);

      // Assert
      expect(formattedDay).toBe('Sat');
    });

    it('Returns Sun when the date is on a Sunday', () => {
      // Arrange
      const aDate = new Date(2021, 10, 28);

      // Action
      const formattedDay = formatDay(aDate);

      // Assert
      expect(formattedDay).toBe('Sun');
    });
  });

  describe('formatFriendlyDate', () => {
    describe('Month formats', () => {
      it('Returns January at the end of the string if the date is in January', () => {
        // Arrange
        const aDate = new Date(2021, 0, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Friday 1st January');
      });

      it('Returns February at the end of the string if the date is in February', () => {
        // Arrange
        const aDate = new Date(2021, 1, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Monday 1st February');
      });

      it('Returns March at the end of the string if the date is in March', () => {
        // Arrange
        const aDate = new Date(2021, 2, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Monday 1st March');
      });

      it('Returns April at the end of the string if the date is in April', () => {
        // Arrange
        const aDate = new Date(2021, 3, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Thursday 1st April');
      });

      it('Returns May at the end of the string if the date is in May', () => {
        // Arrange
        const aDate = new Date(2021, 4, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Saturday 1st May');
      });

      it('Returns June at the end of the string if the date is in June', () => {
        // Arrange
        const aDate = new Date(2021, 5, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Tuesday 1st June');
      });

      it('Returns July at the end of the string if the date is in July', () => {
        // Arrange
        const aDate = new Date(2021, 6, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Thursday 1st July');
      });

      it('Returns August at the end of the string if the date is in August', () => {
        // Arrange
        const aDate = new Date(2021, 7, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Sunday 1st August');
      });

      it('Returns September at the end of the string if the date is in September', () => {
        // Arrange
        const aDate = new Date(2021, 8, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Wednesday 1st September');
      });

      it('Returns October at the end of the string if the date is in October', () => {
        // Arrange
        const aDate = new Date(2021, 9, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Friday 1st October');
      });

      it('Returns November at the end of the string if the date is in November', () => {
        // Arrange
        const aDate = new Date(2021, 10, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Monday 1st November');
      });

      it('Returns December at the end of the string if the date is in December', () => {
        // Arrange
        const aDate = new Date(2021, 11, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Wednesday 1st December');
      });
    });

    describe('Day Number formats', () => {
      it('Returns 1st at the middle of the string if it is the 1st of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 1);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Friday 1st January');
      });

      it('Returns 2nd at the middle of the string if it is the 2nd of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 2);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Saturday 2nd January');
      });

      it('Returns 3rd at the middle of the string if it is the 3rd of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 3);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Sunday 3rd January');
      });

      it('Returns 4th at the middle of the string if it is the 4th of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 4);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Monday 4th January');
      });

      it('Returns 15th at the middle of the string if it is the 15th of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 15);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Friday 15th January');
      });

      it('Returns 21st at the middle of the string if it is the 21st of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 21);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Thursday 21st January');
      });

      it('Returns 22nd at the middle of the string if it is the 22nd of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 22);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Friday 22nd January');
      });

      it('Returns 23rd at the middle of the string if it is the 23rd of the month', () => {
        // Arrange
        const aDate = new Date(2021, 0, 23);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Saturday 23rd January');
      });
    });

    describe('Day Name formats', () => {
      it('Returns Monday at the start of the string if it is a Monday', () => {
        // Arrange
        const aDate = new Date(2021, 0, 4);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Monday 4th January');
      });

      it('Returns Tuesday at the start of the string if it is a Tuesday', () => {
        // Arrange
        const aDate = new Date(2021, 0, 5);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Tuesday 5th January');
      });

      it('Returns Wednesday at the start of the string if it is a Wednesday', () => {
        // Arrange
        const aDate = new Date(2021, 0, 6);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Wednesday 6th January');
      });

      it('Returns Thursday at the start of the string if it is a Thursday', () => {
        // Arrange
        const aDate = new Date(2021, 0, 7);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Thursday 7th January');
      });

      it('Returns Friday at the start of the string if it is a Friday', () => {
        // Arrange
        const aDate = new Date(2021, 0, 8);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Friday 8th January');
      });

      it('Returns Saturday at the start of the string if it is a Saturday', () => {
        // Arrange
        const aDate = new Date(2021, 0, 9);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Saturday 9th January');
      });

      it('Returns Sunday at the start of the string if it is a Sunday', () => {
        // Arrange
        const aDate = new Date(2021, 0, 10);

        // Action
        const friendlyDate = formatFriendlyDate(aDate);

        // Assert
        expect(friendlyDate).toBe('Sunday 10th January');
      });
    });
  });

  describe('formatFriendlyTime', () => {
    it('Returns the time format in PM when a date is after 12 PM', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 13, 54);

      // Action
      const formattedFriendlyTime = formatFriendlyTime(aDate);

      // Assert
      expect(formattedFriendlyTime).toBe('1:54 PM');
    });

    it('Returns the time format in AM when a date is before 12 PM', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 11, 30);

      // Action
      const formattedFriendlyTime = formatFriendlyTime(aDate);

      // Assert
      expect(formattedFriendlyTime).toBe('11:30 AM');
    });

    it('Returns the time format with just a single digit for the hour when a date is before 10 AM', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 9, 30);

      // Action
      const formattedFriendlyTime = formatFriendlyTime(aDate);

      // Assert
      expect(formattedFriendlyTime).toBe('9:30 AM');
    });
  });

  describe('formatShortDate', () => {
    it('Returns the date in the format of dd/M', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20);

      // Action
      const formattedShortDate = formatShortDate(aDate);

      // Assert
      expect(formattedShortDate).toBe('20/11');
    });

    it('Returns a padded 0 in front of the day if the day is less than 10', () => {
      // Arrange
      const aDate = new Date(2021, 10, 7);

      // Action
      const formattedShortDate = formatShortDate(aDate);

      // Assert
      expect(formattedShortDate).toBe('07/11');
    });
  });

  describe('formatShortHour', () => {
    it('Returns the date in the format of ha', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 7);

      // Action
      const formattedShortDate = formatShortHour(aDate);

      // Assert
      expect(formattedShortDate).toBe('7AM');
    });

    it('Returns the time in AM when number is less than 12', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 11);

      // Action
      const formattedShortDate = formatShortHour(aDate);

      // Assert
      expect(formattedShortDate).toBe('11AM');
    });

    it('Returns the time in AM when number is more than 12', () => {
      // Arrange
      const aDate = new Date(2021, 10, 20, 23);

      // Action
      const formattedShortDate = formatShortHour(aDate);

      // Assert
      expect(formattedShortDate).toBe('11PM');
    });
  });

  describe('getFromLocalStorage', () => {
    it('Will return undefined if a number is not stored with a particular key in localStorage', () => {
      // Arrange
      const storageKey = 'test-number';

      // Action
      const number = getFromLocalStorage<number>(storageKey);

      // Assert
      expect(number).toBeUndefined();
    });

    it('Will return the number if a number is stored with a particular key in localStorage', () => {
      // Arrange
      const storageKey = 'test-number';

      localStorage.setItem(storageKey, JSON.stringify(1));

      // Action
      const number = getFromLocalStorage<number>(storageKey);

      // Assert
      expect(number).toBe(1);
    });

    it('Will return a complex object if it is stored with a particular key in localStorage', () => {
      // Arrange
      const storageKey = 'test-object';
      const name = 'Daryl';
      const age = 39;
      const anObject: { name: string; age: number } = {
        name,
        age,
      };

      localStorage.setItem(storageKey, JSON.stringify(anObject));

      // Action
      const storedObject =
        getFromLocalStorage<{ name: string; age: number }>(storageKey);

      // Assert
      expect(storedObject).not.toBeUndefined();
      expect(storedObject?.name).toBe(name);
      expect(storedObject?.age).toBe(age);
    });
  });

  describe('setToLocalStorage', () => {
    // Arrange
    const storageKey = 'test-object';
    const name = 'Daryl';
    const age = 39;
    const anObject: { name: string; age: number } = {
      name,
      age,
    };

    setToLocalStorage(storageKey, anObject);

    // Action
    const storedObjectString = localStorage.getItem(storageKey);

    // Assert
    expect(storedObjectString).toBe('{"name":"Daryl","age":39}');
  });

  describe('zeroIfUndefined', () => {
    it('returns 0 if the value is undefined', () => {
      // Arrange
      const value = undefined;

      // Action
      const newValue = zeroIfUndefined(value);

      // Assert
      expect(newValue).toBe(0);
    });

    it('returns the value if the value is not undefined', () => {
      // Arrange
      const value = 3;

      // Action
      const newValue = zeroIfUndefined(value);

      // Assert
      expect(newValue).toBe(value);
    });
  });

  describe('roundNumberOrZero', () => {
    it('returns 0 if the value is undefined', () => {
      // Arrange
      const value = undefined;

      // Action
      const roundedValue = roundNumberOrZero(value);

      // Assert
      expect(roundedValue).toBe(0);
    });

    it('returns number if the value is an integer', () => {
      // Arrange
      const value = 3;

      // Action
      const roundedValue = roundNumberOrZero(value);

      // Assert
      expect(roundedValue).toBe(value);
    });

    it('returns 2 if the value is 2.4', () => {
      // Arrange
      const value = 2.4;

      // Action
      const roundedValue = roundNumberOrZero(value);

      // Assert
      expect(roundedValue).toBe(2);
    });

    it('returns 3 if the value is 2.6', () => {
      // Arrange
      const value = 2.6;

      // Action
      const roundedValue = roundNumberOrZero(value);

      // Assert
      expect(roundedValue).toBe(3);
    });

    it('returns 3 if the value is 2.5', () => {
      // Arrange
      const value = 2.5;

      // Action
      const roundedValue = roundNumberOrZero(value);

      // Assert
      expect(roundedValue).toBe(3);
    });
  });
});
