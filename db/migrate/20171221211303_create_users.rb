class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.text :f_name
      t.text :l_name
      t.text :email

      t.timestamps
    end
  end
end
