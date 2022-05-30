class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :task
      t.date :due_date
      t.string :priority

      t.timestamps
    end
  end
end
