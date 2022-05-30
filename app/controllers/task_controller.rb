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

    def show
        @task = Task.find(params[:id])

        render json: {
            status: true,
            message: "Success fetch task",
            results: @task
        }
    end
    

    def create
        @task = Task.create(task: params[:task], due_date: params[:due_date], priority: params[:priority])
        render json: {
            status: true,
            message: "Success create tasks"
        }
    end

    def update
        @task = Task.find(params[:id])
        if @task.update(task: params[:task], due_date: params[:due_date], priority: params[:priority])
        render json: {
            status: true,
            message: "Success update tasks"
        }
        else 
        render json: { result: false, msg: "Update Failed "}
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
        render json: {
            status: true,
            message: "Success delete tasks"
        }
    end
    
    

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:task, :due_date, :priority)
    end  
end
