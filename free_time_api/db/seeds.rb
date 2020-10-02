# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
      
Video.create(category: "Music", description: "Classical", link: "https://www.youtube.com/watch?v=9E6b3swbnWg", creator: "Chopin")
Video.create(category: "Music", description: "Classic Rock", link: "https://www.youtube.com/watch?v=CTJrBffpWBY", creator: "The Beatles")
Video.create(category: "Music", description: "Classic Rock", link: "https://www.youtube.com/watch?v=m2uTFF_3MaA", creator: "The Beatles")
Video.create(category: "Music", description: "Classic Rock", link: "https://www.youtube.com/watch?v=FVovq9TGBw0", creator: "Ozzy Osbourne")
Video.create(category: "Music", description: "Classic Rock", link: "https://www.youtube.com/watch?v=ABSXJiYQFuI", creator: "Elton John")
Video.create(category: "Music", description: "Classic Rock", link: "https://www.youtube.com/watch?v=yKvIBkr6RZs", creator: "Elton John")

Comment.create(content: "Great music", video_id: 1)  
Comment.create(content: "Awesome", video_id: 2)     
Comment.create(content: "Super", video_id: 3) 
Comment.create(content: "Great music", video_id: 4)  
Comment.create(content: "Awesome", video_id: 5)     
Comment.create(content: "Super", video_id: 6)     

