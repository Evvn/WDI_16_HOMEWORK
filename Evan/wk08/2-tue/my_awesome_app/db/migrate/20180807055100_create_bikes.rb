class CreateBikes < ActiveRecord::Migration[5.2]
  def change
    create_table :bikes do |t|
      t.string :name
      t.text :description
      t.text :image_url

      t.timestamps
    end
  end
end
