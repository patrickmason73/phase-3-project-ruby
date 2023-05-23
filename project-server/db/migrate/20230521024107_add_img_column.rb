class AddImgColumn < ActiveRecord::Migration[6.1]
  def change
    add_column(:philosophers, :img, :text)
  end
end
