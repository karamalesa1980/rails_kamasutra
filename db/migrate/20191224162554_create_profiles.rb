class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :about_me
      t.json 'contacts'
      t.boolean :lookingForAJob, default: true
      t.text :lookingForAJobDescription
      t.string :fullname, null: false
      t.json 'photos'

      t.timestamps
    end
  end
end
