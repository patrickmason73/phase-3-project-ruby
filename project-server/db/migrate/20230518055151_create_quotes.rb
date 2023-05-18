class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.text :quote
      t.integer :philosopher_id
      t.integer :origin_id
      t.integer :era_id
    end
  end
end
