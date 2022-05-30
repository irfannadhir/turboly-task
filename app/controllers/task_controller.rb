class TaskController < ApplicationController
    before_action :set_task, only: %i[ show edit update destroy ]
    def index
    end

    def get_tasks
        @task = Task.order('created_at DESC')
        @count = @task.count
        render json: {
            status: true,
            message: "Success fetch tasks",
            results: @task,
            total: @count,
        }
    end

    def new
        @task = Task.new
    end

    def create
        puts YAML::dump(params[:task])
        # abort(params[:task])
        # @task = Task.new(task_params)
        # @task = Task.new(task: "test", due_date: "2022-05-30", priority: "NORMAL")
        # respond_to do |format|
        #   if @task.save
        #     render json: {
        #         status: true,
        #         message: "Success create tasks"
        #     }
        #   else
        #     render json: {
        #         status: false,
        #         message: "Failed create tasks",
        #         results: @task,
        #         total: @count,
        #     }
        #   end
        # end
    end
    
end
