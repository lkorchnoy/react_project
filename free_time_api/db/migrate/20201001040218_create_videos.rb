class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :category
      t.string :description
      t.string :link
      t.string :creator 

      t.timestamps
    end
  end
end
