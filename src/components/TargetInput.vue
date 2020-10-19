<template>
  <el-autocomplete
    v-model="target"
    popper-class="my-autocomplete"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    placeholder="Введите группу или фамилию преподавателя"
    clearable
    @select="handleSelect"
  >
    <i
      slot="suffix"
      class="el-icon-search el-input__icon"
    />
    <template slot-scope="{item}">
      <div class="name">
        {{ item.name }}
      </div>
    </template>
  </el-autocomplete>
</template>

<script>
import { getArray } from "@/api/api.js"

export default {
  name: "TargetInput",
  data() {
    return {
      target: "",
      groups: []
    }
  },
  async mounted() {
    this.groups = await getArray()
  },
  methods: {
    querySearch(queryString, cb) {
      let groups = this.groups;
      let results = queryString ? groups.filter(this.createFilter(queryString)) : groups;
      // call callback function to return suggestions
      cb(results)
    },
    createFilter(queryString) {
      return (group) => {
        return (group.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect(item) {
      this.target = item.name
      window.eventBus.$emit("selectTarget", item.name)
    }
  }
}
</script>


<style scope lang="scss">
.my-autocomplete {
  background: $basic-background;
  border: 1px solid $base-border;
  li {
    border-bottom: 1px solid $base-border;
  }
  li:nth-last-child(1) {
    border-bottom: none;
  }
  
  li:hover {
    background: $hover-dark;
    opacity: 0.7;
  }
}

input[type=text] {
  background: $input-dark;
  border: none;
  color: white;
}

input[type=text]:focus {
  border: 1px solid $primary;
}

.el-autocomplete-suggestion {
  &__wrap {
    padding: 0;
  }
}

.el-popper {
  margin-top: 20px !important;
}

.name, 
.institute {
  font-family: helvetica;
  color: white;
}

</style>