class CreateFunFactTable < ActiveRecord::Migration[6.1]
  def change
    create_table :fun_facts do |t|
      t.string :fact
      t.string :user
      t.integer :philosopher_id
    end
  end
end
