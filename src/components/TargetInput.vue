<template>
  <el-autocomplete
    v-model="target"
    popper-class="my-autocomplete"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    placeholder="Введите группу или фамилию преподавателя"
    @select="handleSelect"
  >
    <i
      slot="suffix"
      class="el-icon-search el-input__icon"
    />
    <template slot-scope="{ item }">
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
      window.eventBus.$emit("select-target", item.name)
    }
  },
  async mounted() {
    this.groups = await getArray()
    console.log(this.groups)
  }
}
</script>


<style scope lang="scss">
.my-autocomplete {
  background: var(--basic-background);
  border: 1px solid var(--base-border);
  li {
    border-bottom: 1px solid var(--base-border);
  }
  
  li:hover {
    background: #192734;
    opacity: 0.7;
  }
}

input[type=text] {
  background: #253341;
  border: none;
  color: white;
}

input[type=text]:focus {
  border: 1px solid var(--primary);
}

.el-autocomplete-suggestion {
  &__wrap {
    padding: 0;
  }
}

.el-popper {
  margin-top: 16px !important;
}

.name, 
.institute {
  font-family: helvetica;
  color: white;
}

</style>