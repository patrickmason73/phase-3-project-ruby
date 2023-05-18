class CreatePhilosophers < ActiveRecord::Migration[6.1]
  def change
    create_table :philosophers do |t|
      t.string :name
      t.integer :origin_id
      t.integer :era_id
    end
  end
end
