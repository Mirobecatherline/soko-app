class CreateWishlists < ActiveRecord::Migration[6.1]
  def change
    create_table :wishlists do |t|
      t.string :product_name
      t.integer :buyer_id

      t.timestamps
    end
  end
end
