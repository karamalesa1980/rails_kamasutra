# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
    { fullname: 'Yuriy P.',
      email: 'karamalesa@gmail.com',
      avatarUrl: 'https://vokrug.tv/pic/person/4/a/0/6/4a0628baf22d46d29e456a58892d3291.jpeg',
      status: 'I am a Web_Developer',
      city: 'Severodonetsk',
      country: 'Ukraine'
    },
    { fullname: 'Marina P.',
      email: 'marina@gmail.com',
      avatarUrl: 'https://vokrug.tv/pic/person/4/a/0/6/4a0628baf22d46d29e456a58892d3291.jpeg',
      status: 'I am a Web_Developer too',
      city: 'Severodonetsk',
      country: 'Ukraine'
    },
    { fullname: 'Artem P.',
      email: 'artem@gmail.com',
      avatarUrl: 'https://vokrug.tv/pic/person/4/a/0/6/4a0628baf22d46d29e456a58892d3291.jpeg',
      status: 'I am a Web_Developer too',
      city: 'Severodonetsk',
      country: 'Ukraine'
    },
    { fullname: 'Misha P.',
      email: 'misha@gmail.com',
      avatarUrl: 'https://vokrug.tv/pic/person/4/a/0/6/4a0628baf22d46d29e456a58892d3291.jpeg',
      status: 'I am a Web_Developer too',
      city: 'Severodonetsk',
      country: 'Ukraine'
    },
  ]) 
