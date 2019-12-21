class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :fullname, unique: true
      t.string :email, unique: true
      t.string :avatarUrl
      t.string :status
      t.string :country
      t.string :city

      t.timestamps
    end
  end
end
