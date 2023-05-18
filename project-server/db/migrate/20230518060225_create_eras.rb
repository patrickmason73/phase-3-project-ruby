class CreateEras < ActiveRecord::Migration[6.1]
  def change
    create_table :eras do |t|
      t.string :title
    end
  end
end
