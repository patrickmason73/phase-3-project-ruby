class Philosopher < ActiveRecord::Base
    belongs_to :origin
    belongs_to :era
    has_many :quotes
    has_many :fun_facts
end
