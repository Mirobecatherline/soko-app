class Deleteusertable < ActiveRecord::Migration[6.1]
  def change
    drop_table :users, if_exists: true
  end
end
