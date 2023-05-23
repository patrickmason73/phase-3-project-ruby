class AddUserColumn < ActiveRecord::Migration[6.1]
  def change
    add_column(:comments, :user, :string)
  end
end
