class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :task
      t.date :due_date
      t.string :priority
      t.string :description
      t.string :status, default: "Uncomplete"

      t.timestamps
    end
  end
end
