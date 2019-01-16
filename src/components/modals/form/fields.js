import validatorjs from 'validatorjs'

export const fields = [
  {
    name: 'name',
    label: 'Name',
    rules: 'required|string|regex:/^[a-zA-Z0-9 \\-_:\']*$/',
    options: {
      validateOnChange: true,
    },
  },
  {
    name: 'category',
    label: 'Category',
    rules: 'required|string|between:2,25',
    options: {
      validateOnChange: true,
    },
  },
  {
    name: 'imageUrl',
    label: 'Image Url',
    rules: 'required|url',
    options: {
      validateOnChange: true,
    },
  },
  {
    name: 'description',
    label: 'Description',
    rules: 'required|string|between:2,500',
    options: {
      validateOnChange: true,
    },
  },
  {
    name: 'rate',
    label: 'Rate',
    rules: 'numeric|min:0|max: 10',
    options: {
      validateOnChange: true,
    },
  },
  {
    name: 'year',
    label: 'Year',
    rules: 'required|year|digits:4',
    options: {
      validateOnChange: true,
    },
  },
]

const yearRules = {
  year: {
    function: (year) => year <= (new Date()).getFullYear(),
    message: 'The year can not be greater than current year!',
  },
}

export const plugins = {
  dvr: {
    package: validatorjs,
    extend: ($validator) => {
      const messages = $validator.getMessages('en')
      messages.regex = 'No special characters are allowed!'
      $validator.setMessages('en', messages)
      Object.keys(yearRules).forEach((key) =>
        $validator.register(key, yearRules[key].function, yearRules[key].message))
    },
  },
}

